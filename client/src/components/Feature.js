import React from 'react';
import requireAuth from './navigation/requireAuth'


class Feature extends React.Component {

    render() { 
        return ( 
        <div>
           Rockets Black Market
            </div> );
    }
}
 
export default requireAuth(Feature);