import React, {useEffect} from 'react';
import {TabPanel, TabView} from "primereact/tabview";
import {PinMap} from "../../components/PinMap";
import {ManufacturersTable} from "../../components/ManufacturersTable";
import ManufacturersService from "../../services/manufacturers-service";
import { useState } from 'react';


function Manufacturers() {
    const [data, setData] = useState([]);
    useEffect(() => {
        ManufacturersService.findAll().then(
            result => {
                setData(result);
                //console.log(result);
            });
    },[]);
  return (
      <div>
          <TabView activeIndex={0}>
              <TabPanel header="Liste">
                  <ManufacturersTable showBtn={false}></ManufacturersTable>
              </TabPanel>
              <TabPanel header="Carte">
                  <PinMap markers={data}/>
              </TabPanel>
          </TabView>
      </div>
  );
}

export default Manufacturers;
