import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import useConfig from '../hooks/useConfig';
import Page from '../components/Page';
import Input from '../components/forms/Input';
import GistCard from '../components/GistCard';

import { Tabs, TabPanel } from '../components/Tab';

const Dashboard = () => {
  const { api } = useConfig();

  const { isLoading, error, data } = useQuery('gists', () => axios(`${api}/gists`, { withCredentials: true }).then((res) => res.data.data));

  if (isLoading) return null;

  return (
    <Page title="Dashboard">
      {/* <div className="row">
        <div className="col-sm-12">
          <form>
            <Input placeholder="Search Your Gists..." />
          </form>
          <hr />
        </div>
      </div> */}

      <Tabs>
        <TabPanel name="My Gists">
          <div className="row">
            { data.map((item) => (
              <div className="col-sm-4" style={{ marginBottom: 50 }}>
                <GistCard
                  colors={item.paintSummary}
                  title={item.title}
                  model={item.modelName}
                  stepCount={item.steps.length}
                />
              </div>

            )) }
          </div>
        </TabPanel>
        <TabPanel name="Favorites">
          favorites here...
        </TabPanel>
        <TabPanel name="Following Artists">
          Following Artists
        </TabPanel>
      </Tabs>
    </Page>
  );
};

export default Dashboard;
