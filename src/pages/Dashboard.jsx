import React from 'react';


import Page from '../components/Page';
import GistCard from '../components/GistCard';

import withAuth from '../hoc/withAuth';
import useUserGists from '../hooks/useUserGists';

import { Tabs, TabPanel } from '../components/Tab';

const Dashboard = ({ user }) => {
  const { id } = user;
  const { isLoading, error, data } = useUserGists(id);

  if (isLoading) return null;

  return (
    <Page title="Dashboard">
      <Tabs>
        <TabPanel name="My Gists">
          <div className="row">
            { data.map((item) => (
              <div className="col-sm-4" style={{ marginBottom: 50 }}>
                <GistCard
                  id={item.id}
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

// export default Dashboard;
export default withAuth(Dashboard);
