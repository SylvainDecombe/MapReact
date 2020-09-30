import React from 'react';
import {TabPanel, TabView} from "primereact/tabview";
import {PinMap} from "../../components/PinMap";
import {ManufacturersTable} from "../../components/ManufacturersTable";


function Manufacturers() {
  return (
      <div>
          <TabView activeIndex={0}>
              <TabPanel header="Liste">
                  <ManufacturersTable></ManufacturersTable>
              </TabPanel>
              <TabPanel header="Carte">
                  <PinMap/>
              </TabPanel>
          </TabView>
      </div>
  );
}

export default Manufacturers;
