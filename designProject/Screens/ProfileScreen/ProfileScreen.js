import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native';
import styles from './ProfileScreenStyles';

const options = [
    { id: '1', label: 'My Profile', icon: require('../../images/profilePersonIcon.png') },
    { id: '2', label: 'Settings', icon: require('../../images/settingIcon.png') },
    { id: '3', label: 'Terms & Conditions', icon: require('../../images/termsCondition.png') },
    { id: '4', label: 'Privacy Policy', icon: require('../../images/policy.png') },
    { id: '5', label: 'Log out', icon: require('../../images/logoutIcon.png') },
];

const ProfileScreen = () => {

    const profileSection = () => {
        return (
            <View>
                <View style={styles.profileSection}>
                    <View style={styles.ProflePicEditContainer}>
                        <Image
                            source={require('../../images/profilepic.png')}
                            style={styles.profileImage}
                        />
                        <TouchableOpacity style={styles.editIcon}>
                            <Image
                                source={require('../../images/Editprofile.png')}
                                style={styles.EditIcon}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>Michael Mitc</Text>
                        <Text style={styles.profileTitle}>Lead UI/UX Designer</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.editProfileButton}>
                    <Text style={styles.editProfileButtonText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const menuItemContainer = () => {
        return (
            <View style={styles.menuItemContainer}>
                <FlatList
                    data={options}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuItemLeft}>
                                <Image
                                    source={item.icon}
                                    style={styles.menuIcon}
                                />
                                <Text style={[styles.menuLabel, item.label === 'Log out' && { color: 'red' }]}>{item.label}</Text>
                            </View>
                            <Image
                                source={require('../../images/forwardarrow.png')}
                                style={styles.forwarArrow}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {profileSection()}
                {menuItemContainer()}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;
