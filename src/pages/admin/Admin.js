import React from 'react';
import {TabPanel, TabView} from "primereact/tabview";
import {CustomersTable} from "../../components/CustomersTable";
import './Admin.css';
import {ManufacturersTable} from "../../components/ManufacturersTable";
import {UsersTable} from "../../components/UsersTable";


function Admin() {
  return (
      <div>
          <TabView activeIndex={0}>
              <TabPanel header="Clients">
                  <CustomersTable showBtn={true}></CustomersTable>
              </TabPanel>
              <TabPanel header="Fabricants">
                  <ManufacturersTable/>
              </TabPanel>
              <TabPanel header="Utilisateurs">
                  <UsersTable/>
              </TabPanel>
          </TabView>
      </div>
  );
}

export default Admin;
