import React from 'react';
import {TabPanel, TabView} from "primereact/tabview";
import {CustomerTable} from "../../components/CustomerTable";
import './Admin.css';
import {ManufacturersTable} from "../../components/ManufacturersTable";
import {UsersTable} from "../../components/UsersTable";


function Admin() {
  return (
      <div>
          <TabView activeIndex={0}>
              <TabPanel header="Clients">
                  <CustomerTable/>
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
