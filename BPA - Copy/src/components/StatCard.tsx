import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: string;
    color?: string;
    onPress?: () => void;
    subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    icon,
    color = COLORS.primary,
    onPress,
    subtitle,
}) => {
    if (onPress) {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={[styles.iconContainer, { backgroundColor: color }]}>
                    <MaterialIcons name={icon as any} size={24} color="#fff" />
                </View>
                <View style={styles.content}>
                    <Text style={styles.value}>{value}</Text>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={[styles.iconContainer, { backgroundColor: color }]}>
                <MaterialIcons name={icon as any} size={24} color="#fff" />
            </View>
            <View style={styles.content}>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        minWidth: 100,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    content: {
        alignItems: 'center',
    },
    value: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 4,
    },
    title: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        textAlign: 'center',
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 10,
        color: COLORS.textLight,
        textAlign: 'center',
    },
});

export default StatCard;
