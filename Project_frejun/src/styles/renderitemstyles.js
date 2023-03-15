import { StyleSheet } from "react-native";

const renderitemstyles = StyleSheet.create({
    outerbox :{
      padding: 10,
      borderWidth: 1,
      height: 80,
      borderRadius: 15,
      gap:10,
      flexDirection:"row",
      borderWidth: 1,
      margin: 10,
    },
    idbox:{
      flex:1, 
      height:50, 
      backgroundColor:"#1D3932", 
      borderRadius:25, 
      alignItems:"center", 
      justifyContent:"center"
    },
    idtext:{
      color:"white", 
      fontSize:18
    }, 
    namandemail:{
      flexDirection:"row", 
      alignItems:"center"
    },
    blacktext:{
      color:"black"
    },
    nameandemailouter:{
      flex:5, 
      marginTop:-5
    }
  })

  export default renderitemstyles;