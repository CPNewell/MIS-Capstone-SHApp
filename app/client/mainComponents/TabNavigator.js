import React, { Component } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home/index'
import ProfileScreen from '../screens/profile/index'
import JournalScreen from '../screens/journal/index'
import AcademicScreen from '../screens/academic/index'
import SurveyScreen from '../screens/survey/index'
import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer,
} from 'react-navigation';



const ProfileNavigator = createStackNavigator({
    Profile: { screen: ProfileScreen },
    Academic: { screen: AcademicScreen },
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        initialRouteName: 'Profile'
});
const ProfileContainer = createAppContainer(ProfileNavigator);
class ProfileContainerState extends React.Component {
    static router = ProfileContainer.router;
    constructor(props) {
        super(props);
    }
    render() {
        let {navigation} = this.props;
        console.log("ProfileContainerState rendered")
        return (
            <ProfileContainer 
            screenProps={{...this.props.screenProps}} 
            navigation={navigation}
            />
        )
    }
}
const AppNavigator = createBottomTabNavigator(
    {
        Profile: {
            screen: ProfileContainerState,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Profile'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="user" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Survey: {
            screen: SurveyScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Survey'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="file-text" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Home'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Resources: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Resouces'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="gears" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Journal: {
            screen: JournalScreen,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ fontSize: 13, color: tintColor, textAlign: 'center' }}>
                        {'Journal'}
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="pencil" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'crimson',
            inactiveTintColor: 'gray',
            style: {
                height: 50
            },
        },
        backBehavior: "initialRoute",
        initialRouteName: 'Home'
    }
);
const TabContainer = createAppContainer(AppNavigator);
class TabContainerState extends React.Component {
    static router = TabContainer.router;
    constructor(props) {
        super(props);
    }
    render() {
        let {navigation} = this.props;
        console.log("TabContainerState rendered")
        return (
            <TabContainer 
            screenProps={{...this.props.screenProps}} 
            navigation={navigation}
            />
        )
    }
}
export default TabContainerState