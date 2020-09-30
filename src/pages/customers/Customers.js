import React from 'react';
import {PinMap} from "../../components/PinMap";
import {TabPanel, TabView} from "primereact/tabview";
import {CustomersTable} from "../../components/CustomersTable";


function Customers() {
  return (
      <div>
        <TabView activeIndex={0}>
            <TabPanel header="Liste">
                <CustomersTable showBtn={false}></CustomersTable>
            </TabPanel>
            <TabPanel header="Carte">
                <PinMap/>
            </TabPanel>
        </TabView>
      </div>
  );
}

export default Customers;
