import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { Animal } from '../types';
import { getAgeString, getAnimalStatusColor, getAnimalIcon } from '../utils/helpers';

interface AnimalCardProps {
    animal: Animal;
    onPress: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    showActions?: boolean;
}

const AnimalCard: React.FC<AnimalCardProps> = ({
    animal,
    onPress,
    onEdit,
    onDelete,
    showActions = true,
}) => {
    const statusColor = getAnimalStatusColor(animal.status);
    const iconName = getAnimalIcon(animal.species);
    const age = getAgeString(animal.dateOfBirth);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.header}>
                <View style={styles.animalInfo}>
                    <View style={[styles.icon, { backgroundColor: statusColor }]}>
                        <MaterialIcons name={iconName as any} size={24} color="#fff" />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.name}>{animal.name}</Text>
                        <Text style={styles.breed}>{animal.breed} • {animal.species}</Text>
                        <Text style={styles.age}>{age}</Text>
                    </View>
                </View>
                {showActions && (
                    <View style={styles.actions}>
                        {onEdit && (
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={(e) => {
                                    e.stopPropagation();
                                    onEdit();
                                }}
                            >
                                <MaterialIcons name="edit" size={20} color={COLORS.primary} />
                            </TouchableOpacity>
                        )}
                        {onDelete && (
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={(e) => {
                                    e.stopPropagation();
                                    onDelete();
                                }}
                            >
                                <MaterialIcons name="delete" size={20} color={COLORS.error} />
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>

            <View style={styles.body}>
                <View style={styles.metrics}>
                    <View style={styles.metric}>
                        <MaterialIcons name="monitor-weight" size={16} color={COLORS.textSecondary} />
                        <Text style={styles.metricText}>{animal.weight} kg</Text>
                    </View>
                    <View style={styles.metric}>
                        <MaterialIcons name="palette" size={16} color={COLORS.textSecondary} />
                        <Text style={styles.metricText}>{animal.color}</Text>
                    </View>
                    {animal.identificationNumber && (
                        <View style={styles.metric}>
                            <MaterialIcons name="badge" size={16} color={COLORS.textSecondary} />
                            <Text style={styles.metricText}>{animal.identificationNumber}</Text>
                        </View>
                    )}
                </View>
                <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
                    <Text style={styles.statusText}>{animal.status.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.surface,
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        marginVertical: 6,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    animalInfo: {
        flexDirection: 'row',
        flex: 1,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 2,
    },
    breed: {
        fontSize: SIZES.caption,
        color: COLORS.textSecondary,
        marginBottom: 2,
    },
    age: {
        fontSize: SIZES.small,
        color: COLORS.textLight,
    },
    actions: {
        flexDirection: 'row',
    },
    actionButton: {
        padding: 8,
        marginLeft: 4,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    metrics: {
        flexDirection: 'row',
        flex: 1,
    },
    metric: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    metricText: {
        fontSize: SIZES.small,
        color: COLORS.textSecondary,
        marginLeft: 4,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default AnimalCard;
