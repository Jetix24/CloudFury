"use client";
import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import InterestCard from './InterestCard';
import { User, Interests } from '@prisma/client';
import styles from "./FormIntereses.module.css";
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import getUserInterests from '@/app/actions/getUserInterests';

interface FormInteresesProps {
    currentUser: User;
    interest: Interests[];
}



const FormIntereses: React.FC<FormInteresesProps> = ({ currentUser, interest }) => {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]); // Cambiado a string[]
    const router = useRouter();

    useEffect(() => {
        const fetchUserInterests = async () => {
            const userInterests = await getUserInterests();
            console.log(userInterests);
            setSelectedInterests(userInterests);
        };
    
        fetchUserInterests();
    }, [currentUser.id]);

    const handleInterestChange = useCallback((interestId: string, isSelected: boolean) => {
        if (interestId) {
            setSelectedInterests(prevInterests => {
                const newInterests = isSelected ? [...prevInterests, interestId] : prevInterests.filter(id => id !== interestId);
                return newInterests;
            });
        }
    }, []);

    const handleSave = useCallback(async () => {     
        if (selectedInterests.length < 3) {
            toast.error('Selecciona al menos 3 intereses');
            return;
        }
        await axios.post('/api/userInterest', {
            userId: currentUser.id,
            interests: selectedInterests
        });
        router.push('/dashboard');
    }, [selectedInterests, router, currentUser.id]);

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div className="mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {interest.map((interest) => (
                        <div key={interest.id} className="flex-none lg:w-60 w-60">
                            <InterestCard 
                            data={interest} 
                            currentUser={currentUser} 
                            onInterestChange={handleInterestChange} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 w-full bg-white flex justify-center mt-20">
                <button onClick={handleSave} className={styles.btnGuardar}>Guardar</button>
            </div>
        </div>
    );
}

export default FormIntereses;