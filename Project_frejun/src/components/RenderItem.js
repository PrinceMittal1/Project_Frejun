import {View, Text} from 'react-native';
import renderitemstyles from '../styles/renderitemstyles';

function Stringtrimmer({data}) {
  let trimedstring = data.substring(0, 25);
  return (
      <Text style={{color: 'black', fontSize:18}}>{trimedstring}</Text>
  );
}

const RenderItem = ({item, index}) => (
  <View style={renderitemstyles.outerbox}>


    <View style={renderitemstyles.idbox}>

      <Text style={renderitemstyles.idtext}>{item.id}</Text>

    </View>


    <View style={renderitemstyles.nameandemailouter}>

       <View style={renderitemstyles.namandemail}>
           <Text style={renderitemstyles.blacktext}>Name:- </Text>
           <Stringtrimmer data={item.name}/>
       </View>

       <View style={renderitemstyles.namandemail}>
          <Text style={renderitemstyles.blacktext}>Email:-  {item.email}</Text>
       </View>

    </View>


  </View>
);

export default RenderItem;


