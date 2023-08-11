import React from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View, RefreshControl } from 'react-native'
import FlipCard from 'react-native-flip-card'
import styles from './styles'

const data = [{ "id": 8411, "uid": "cefa08ac-ad7f-4521-9afa-3dedfec7fd6c", "password": "13WIuZwRQn", "first_name": "Lyle", "last_name": "Lowe", "username": "lyle.lowe", "email": "lyle.lowe@email.com", "avatar": "https://robohash.org/velomnisneque.png?size=300x300\u0026set=set1", "gender": "Male", "phone_number": "+32 712-193-3467 x866", "social_insurance_number": "299087270", "date_of_birth": "1963-11-21", "employment": { "title": "Forward Advertising Analyst", "key_skill": "Technical savvy" }, "address": { "city": "New Mortonmouth", "street_name": "Corey Plaza", "street_address": "6191 DuBuque Route", "zip_code": "14834-8423", "state": "Texas", "country": "United States", "coordinates": { "lat": 14.698655740114617, "lng": 34.31955860168853 } }, "credit_card": { "cc_number": "4733745597171" }, "subscription": { "plan": "Gold", "status": "Blocked", "payment_method": "Visa checkout", "term": "Annual" } }, { "id": 6705, "uid": "14ed178e-143d-4798-aee5-9b3ca24a61d7", "password": "6UJNyBwuX7", "first_name": "Kenny", "last_name": "Hyatt", "username": "kenny.hyatt", "email": "kenny.hyatt@email.com", "avatar": "https://robohash.org/autametrerum.png?size=300x300\u0026set=set1", "gender": "Non-binary", "phone_number": "+31 (902) 442-6860 x673", "social_insurance_number": "582808614", "date_of_birth": "1998-07-03", "employment": { "title": "Advertising Agent", "key_skill": "Teamwork" }, "address": { "city": "South Marya", "street_name": "Blick Junction", "street_address": "439 Beahan Stream", "zip_code": "25686", "state": "Wyoming", "country": "United States", "coordinates": { "lat": -75.38417838744947, "lng": 113.2175044676531 } }, "credit_card": { "cc_number": "4662-7536-3717-5808" }, "subscription": { "plan": "Platinum", "status": "Pending", "payment_method": "Visa checkout", "term": "Full subscription" } }, { "id": 4084, "uid": "e1cde798-9b2b-4038-983b-98b05bb08968", "password": "cP3ul6UKpg", "first_name": "Dwight", "last_name": "Rogahn", "username": "dwight.rogahn", "email": "dwight.rogahn@email.com", "avatar": "https://robohash.org/velitodiovel.png?size=300x300\u0026set=set1", "gender": "Non-binary", "phone_number": "+976 581-377-9558 x876", "social_insurance_number": "249093154", "date_of_birth": "2002-08-20", "employment": { "title": "Chief Technology Facilitator", "key_skill": "Communication" }, "address": { "city": "South Ward", "street_name": "Streich Parks", "street_address": "65419 Herman Tunnel", "zip_code": "11204-7898", "state": "Kansas", "country": "United States", "coordinates": { "lat": 35.901908211676925, "lng": -100.34342822405023 } }, "credit_card": { "cc_number": "4128006410919" }, "subscription": { "plan": "Professional", "status": "Active", "payment_method": "Bitcoins", "term": "Payment in advance" } }, { "id": 4858, "uid": "4d37f5b7-9646-4e7d-9030-0d3422eede98", "password": "6ihpx42TlY", "first_name": "Shannon", "last_name": "Harber", "username": "shannon.harber", "email": "shannon.harber@email.com", "avatar": "https://robohash.org/oditeumsuscipit.png?size=300x300\u0026set=set1", "gender": "Genderfluid", "phone_number": "+381 266.386.9228", "social_insurance_number": "693616807", "date_of_birth": "1963-01-08", "employment": { "title": "Manufacturing Representative", "key_skill": "Work under pressure" }, "address": { "city": "South Neely", "street_name": "Conn Tunnel", "street_address": "95252 Marcel Turnpike", "zip_code": "33603-2897", "state": "Minnesota", "country": "United States", "coordinates": { "lat": 60.97234150187791, "lng": -110.44741750501026 } }, "credit_card": { "cc_number": "6771-8968-6554-4899" }, "subscription": { "plan": "Gold", "status": "Active", "payment_method": "Money transfer", "term": "Payment in advance" } }, { "id": 6575, "uid": "bcb07058-f603-45b1-a76e-51f6b66a00c9", "password": "XwROkbW2hu", "first_name": "Conrad", "last_name": "Wiza", "username": "conrad.wiza", "email": "conrad.wiza@email.com", "avatar": "https://robohash.org/exercitationemquaedelectus.png?size=300x300\u0026set=set1", "gender": "Genderqueer", "phone_number": "+57 317-863-7160 x05911", "social_insurance_number": "388776890", "date_of_birth": "1991-04-23", "employment": { "title": "International Manager", "key_skill": "Problem solving" }, "address": { "city": "Gutmannton", "street_name": "Olson Inlet", "street_address": "1720 Lester Hollow", "zip_code": "64389", "state": "New Jersey", "country": "United States", "coordinates": { "lat": 0.18012483211516894, "lng": 47.931508096950694 } }, "credit_card": { "cc_number": "4945088623881" }, "subscription": { "plan": "Premium", "status": "Pending", "payment_method": "Alipay", "term": "Payment in advance" } }, { "id": 5454, "uid": "26fcda22-c4bd-48cc-8c88-f9da57ee0183", "password": "O4DdLBKzR9", "first_name": "Pat", "last_name": "Roob", "username": "pat.roob", "email": "pat.roob@email.com", "avatar": "https://robohash.org/dictaestsuscipit.png?size=300x300\u0026set=set1", "gender": "Genderfluid", "phone_number": "+960 1-267-766-1306 x82700", "social_insurance_number": "524153384", "date_of_birth": "1996-05-02", "employment": { "title": "Mining Administrator", "key_skill": "Communication" }, "address": { "city": "Port Herb", "street_name": "Dewey Courts", "street_address": "977 Augustine Gardens", "zip_code": "44446-8230", "state": "North Carolina", "country": "United States", "coordinates": { "lat": 10.126201635643554, "lng": 104.69141643918732 } }, "credit_card": { "cc_number": "5510-1818-8121-6295" }, "subscription": { "plan": "Platinum", "status": "Active", "payment_method": "Credit card", "term": "Annual" } }, { "id": 7507, "uid": "23c62f74-98ea-4bc8-88c5-58417b7da0a3", "password": "SQOYsXEh3k", "first_name": "Reyes", "last_name": "Watsica", "username": "reyes.watsica", "email": "reyes.watsica@email.com", "avatar": "https://robohash.org/consecteturevenietet.png?size=300x300\u0026set=set1", "gender": "Genderqueer", "phone_number": "+504 487.104.1433", "social_insurance_number": "341089985", "date_of_birth": "1990-10-16", "employment": { "title": "Sales Specialist", "key_skill": "Technical savvy" }, "address": { "city": "Swaniawskifurt", "street_name": "Ha Fort", "street_address": "9503 Liane Crescent", "zip_code": "13735", "state": "Utah", "country": "United States", "coordinates": { "lat": -76.5520452014052, "lng": -109.5699469939026 } }, "credit_card": { "cc_number": "6771-8941-3230-2712" }, "subscription": { "plan": "Bronze", "status": "Pending", "payment_method": "Money transfer", "term": "Payment in advance" } }, { "id": 4890, "uid": "1eafc8cb-0a9d-4591-8d34-09f4dd2f42e7", "password": "ZaK2uGBb7l", "first_name": "Alonzo", "last_name": "Lesch", "username": "alonzo.lesch", "email": "alonzo.lesch@email.com", "avatar": "https://robohash.org/iuresitenim.png?size=300x300\u0026set=set1", "gender": "Genderqueer", "phone_number": "+222 (624) 027-0384 x35651", "social_insurance_number": "104340534", "date_of_birth": "1964-12-29", "employment": { "title": "Senior Real-Estate Specialist", "key_skill": "Problem solving" }, "address": { "city": "Kshlerinfort", "street_name": "Bryan Parks", "street_address": "10728 Carleen Knoll", "zip_code": "63859", "state": "Virginia", "country": "United States", "coordinates": { "lat": 71.19736756181908, "lng": -131.70821627787765 } }, "credit_card": { "cc_number": "6771-8976-9186-0368" }, "subscription": { "plan": "Premium", "status": "Blocked", "payment_method": "Cash", "term": "Payment in advance" } }, { "id": 5981, "uid": "65fe340e-39ef-4003-ac71-b4b1e14b8bf8", "password": "PekMChHZo3", "first_name": "Tyrell", "last_name": "Cormier", "username": "tyrell.cormier", "email": "tyrell.cormier@email.com", "avatar": "https://robohash.org/rerumautemest.png?size=300x300\u0026set=set1", "gender": "Agender", "phone_number": "+974 (894) 088-2181 x1426", "social_insurance_number": "108294331", "date_of_birth": "1997-11-25", "employment": { "title": "Dynamic Orchestrator", "key_skill": "Self-motivated" }, "address": { "city": "West Traceyside", "street_name": "Meridith Fields", "street_address": "596 Yundt Islands", "zip_code": "76157", "state": "New Hampshire", "country": "United States", "coordinates": { "lat": 31.60226639196364, "lng": -80.37735270185183 } }, "credit_card": { "cc_number": "5337-4584-0911-1302" }, "subscription": { "plan": "Bronze", "status": "Idle", "payment_method": "Google Pay", "term": "Full subscription" } }, { "id": 1567, "uid": "7e670cc4-d9de-4932-a2d3-e7a2a4caa7f6", "password": "Rm9xdHkqiU", "first_name": "Shona", "last_name": "Bashirian", "username": "shona.bashirian", "email": "shona.bashirian@email.com", "avatar": "https://robohash.org/sitquoet.png?size=300x300\u0026set=set1", "gender": "Non-binary", "phone_number": "+66 (392) 710-1200 x044", "social_insurance_number": "578090508", "date_of_birth": "1993-11-21", "employment": { "title": "Manufacturing Liaison", "key_skill": "Work under pressure" }, "address": { "city": "Port Joanneborough", "street_name": "Olin Circle", "street_address": "97741 Leatha Ford", "zip_code": "48579", "state": "Idaho", "country": "United States", "coordinates": { "lat": -13.277272452855286, "lng": -35.23349293011793 } }, "credit_card": { "cc_number": "4877064234963" }, "subscription": { "plan": "Business", "status": "Active", "payment_method": "Cheque", "term": "Payment in advance" } }]

const itemFlatList = ({ item, index }: any) => {
    return <View style={styles.itemList} >
        <FlipCard
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}>
            <View>
                <Image style={styles.userAvatar} source={{ uri: item.avatar }} />
                <View style={styles.basicInfo}>
                    <Text style={styles.userName} >
                        {`${item.first_name} ${item.last_name}`}
                    </Text>
                    <Text style={styles.titleEmployment} >
                        {`${item.employment.title}`}
                    </Text>
                </View>
            </View>
            <View>
                <View style={styles.basicInfo}>
                    <Text style={styles.titleEmployment} >
                        <Text style={styles.labelInfo} >Gender: </Text>
                        {`${item.gender}`}
                    </Text>
                    <Text style={styles.titleEmployment} >
                        <Text style={styles.labelInfo} >Email: </Text>
                        {`${item.email}`}
                    </Text>
                    <Text style={styles.titleEmployment} >
                        <Text style={styles.labelInfo} >Phone Number: </Text>
                        {`${item.phone_number}`}
                    </Text>
                    <Text style={styles.titleEmployment} >
                        <Text style={styles.labelInfo} >Birthday: </Text>
                        {`${item.date_of_birth}`}
                    </Text>
                    <Text style={styles.titleEmployment} >
                        <Text style={styles.labelInfo} >Address: </Text>
                        {`${item.address.street_address}, ${item.address.street_name}, ${item.address.city}, ${item.address.state}`}
                    </Text>
                </View>
            </View>
        </FlipCard>
    </View>
}

const HomeView = ({ fetchData, data }: any) => {
    const { users, isLoading } = data
    return <View style={{ flex: 1 }} >
        <SafeAreaView />
        <TouchableOpacity onPress={fetchData} style={styles.reloadButton} >
            <Text style={styles.reloadText}>Click to reload</Text>
        </TouchableOpacity>
        <FlatList
            columnWrapperStyle={{
                justifyContent: 'space-around'
            }}
            data={users}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={itemFlatList}
            numColumns={2}
            refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
        />
        <SafeAreaView />
    </View>
}

export default HomeView