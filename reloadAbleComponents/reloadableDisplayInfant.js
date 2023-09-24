import React, { useState, useEffect } from 'react';
import DisplayInfant from "../screens/HOME/DisplayInfant";
import { useFocusEffect } from '@react-navigation/native';
const ReloadableDisplayInfant=()=>{

    const [key, setKey] = useState(0);

    useFocusEffect(
        React.useCallback(() => {
            console.log("reloadable")
          setKey(key + 1); // Increment the key to force a re-render
        }, [])
      );
  
    return <DisplayInfant key={key} />;z

}


export default ReloadableDisplayInfant;