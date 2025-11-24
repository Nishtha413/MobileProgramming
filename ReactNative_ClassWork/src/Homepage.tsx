import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';

const Homepage = () => {
return (
    <View style={styles.main_container}>

    <View style={styles.header_container}>
        <Icon name="deceased" type="material" color="#e1275f" size={40} />
        <Text style={styles.header_text}>Period Tracker</Text>
    </View>

    
    <View style={styles.body_container}>
        <View style={styles.calender_container}>
            <Calendar
            current={'2025-11-24'}
            markedDates={{
                '2025-11-01': { selected: true, selectedColor: '#e1275f' },
                '2025-11-02': { selected: true, selectedColor: '#e1275f' },
                '2025-11-12': { marked: true, dotColor: '#f5a623' },
                '2025-11-13': { marked: true, dotColor: '#f5a623' },
            }}
            theme={{
                todayTextColor: '#00adf5',
                arrowColor: '#e1275f',
                selectedDayBackgroundColor: '#e1275f',
                textDayFontSize: 16,
                textMonthFontSize: 18,
                textDayHeaderFontSize: 14,
            }}
            />
        </View>

        {/* Period Countdown Circle */}
        <View style={styles.period_circle_container}>
        <View style={styles.period_circle}>
            <Text style={styles.period_text}>Period in</Text>
            <Text style={styles.period_days}>17 days</Text>
        </View>
        <Text style={styles.tip_text}>🌸 Don’t forget to drink water!</Text>
        </View>
    </View>

    {/* Navbar */}
    <View style={styles.nav_container}>
        <View style={styles.nav_item}>
        <Icon name="home" type="material" color="#e1275f" size={32} />
        <Text style={styles.nav_text}>Home</Text>
        </View>
        <View style={styles.nav_item}>
        <Icon name="dashboard" type="material" color="#e1275f" size={32} />
        <Text style={styles.nav_text}>Overview</Text>
        </View>
        <View style={styles.nav_item}>
        <Icon name="add" type="material" color="#e1275f" size={32} />
        <Text style={styles.nav_text}>Track</Text>
        </View>
        <View style={styles.nav_item}>
        <Icon name="book" type="material" color="#e1275f" size={32} />
        <Text style={styles.nav_text}>Diary</Text>
        </View>
        <View style={styles.nav_item}>
        <Icon name="settings" type="material" color="#e1275f" size={32} />
        <Text style={styles.nav_text}>Settings</Text>
        </View>
    </View>

    </View>
);
};

const styles = StyleSheet.create({
main_container: { flex: 1, position: 'relative', width: '100%', backgroundColor: '#fff' },


header_container: {
    width: '100%',
    justifyContent: 'center',
    height: 65,
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
},
header_text: { color: '#e1275f', fontSize: 25, fontWeight: '500', top: 3 },

// Body
body_container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10, width:'100%' },

// Period Circle
period_circle_container: { marginTop: 20, alignItems: 'center' },
period_circle: {
    width: 250,
    height: 250,
    borderRadius: '100%',
    backgroundColor: '#ffc1cc',
    justifyContent: 'center',
    alignItems: 'center',
},
period_text: { fontSize: 18, color: '#e1275f' },
period_days: { fontSize: 28, fontWeight: 'bold', color: '#e1275f', marginTop: 5 },
tip_text: {fontSize: 20, color: '#e1275f', marginTop:5 },

// Navbar
nav_container: {
    position: 'absolute',
    height: 65,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: 'pink',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
},
nav_item: { justifyContent: 'center', alignItems: 'center' },
nav_text: { fontSize: 14, color: '#e1275f', marginTop: 4 },

calender_container:{
    width:'100%',
    marginLeft:10,
    marginRight:10
}
});

export default Homepage;
