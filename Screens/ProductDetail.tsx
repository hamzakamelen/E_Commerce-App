import { Text, View, Image, ScrollView } from "react-native";
import styles from "../style/style";


function ProductDetails({ navigation, route }:any) {
    let obj = route.params
    console.log(obj)
    return <>
    <ScrollView>
        <View style={styles.p2}>
            <Text style={[styles.fs2,styles.textBlack,styles.textBold]}>{obj.title}</Text>
            <Image resizeMode="contain" style={{ width: 200, height: 200,marginTop:25,marginLeft:40 }} source={{ uri: obj.image }} />
            <Text style={[styles.textBlack,styles.textBold,styles.fs4,styles.mt2]}>Description:</Text>
            <Text style={[styles.textBlack,styles.fs5]}>{obj.description}</Text>
            <View style={[styles.flexRow]}>
            <Text style={[styles.textBlack,styles.textBold,styles.fs3,styles.mt2]}>Price: ${obj.price}</Text>
            <Text style={[styles.textBlack,styles.textBold,styles.fs3,styles.mt2,styles.ms5]}>Rating: {obj.rating.rate}</Text> 
            </View>
        </View>
        </ScrollView>
    </>
}
export default ProductDetails;