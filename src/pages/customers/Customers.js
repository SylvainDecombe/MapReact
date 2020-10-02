import React, {useEffect} from 'react';
import {PinMap} from "../../components/PinMap";
import {TabPanel, TabView} from "primereact/tabview";
import {CustomersTable} from "../../components/CustomersTable";
import CustomersService from "../../services/customers-service";
import { useState } from 'react';

function Customers() {
  const [data, setData] = useState([]);
    useEffect(() => {
      CustomersService.findAll().then(
            result => {
                setData(result);
                //console.log(result);
            });
    },[]);
  return (
      <div>
        <TabView activeIndex={0}>
            <TabPanel header="Liste">
                <CustomersTable showBtn={false}></CustomersTable>
            </TabPanel>
            <TabPanel header="Carte">
                  <PinMap markers={data}/>
            </TabPanel>
        </TabView>
      </div>
  );
}

export default Customers;
