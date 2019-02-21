import React from 'react';
import requireAuth from './navigation/requireAuth'


class Feature extends React.Component {

    render() { 
        return ( <div>Black Rockets Market</div> );
    }
}
 
export default requireAuth(Feature);