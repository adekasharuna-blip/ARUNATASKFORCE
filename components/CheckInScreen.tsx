import React, { useState } from 'react';
import ArunaLogo from './ArunaLogo';
import MentalStateSelector from './MentalStateSelector';
import PrimaryButton from './PrimaryButton';
import { MentalStateId } from '@/data/mentalStates';

interface CheckInScreenProps {
  onComplete: (stateId: MentalStateId) => void;
}

export default function CheckInScreen({ onComplete }: CheckInScreenProps) {
  const [selectedId, setSelectedId] = useState<MentalStateId | null>(null);

  const handleContinue = () => {
    if (selectedId) {
      onComplete(selectedId);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto px-6 min-h-screen animate-fade-in pb-12">
      <ArunaLogo />
      
      <main className="flex-1 flex flex-col mt-4 sm:mt-10">
        <div className="space-y-4 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
            Halo, aku ARUNA. Teman belajar kamu.
          </h2>
          <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground/90 mt-2">
            Apa kabarmu hari ini?
          </h3>
          
          <p className="text-foreground/70 text-lg max-w-lg mt-6 leading-relaxed">
            Kita akan belajar sesuai kesanggupan kamu.<br className="hidden sm:block" />
            Yuk, jujur dengan diri sendiri :) 
          </p>
        </div>

        <MentalStateSelector 
          selectedId={selectedId} 
          onSelect={setSelectedId} 
        />

        <div className="flex justify-center sm:justify-start mt-4">
          <PrimaryButton 
            disabled={!selectedId} 
            onClick={handleContinue}
          >
            Lanjut &rarr;
          </PrimaryButton>
        </div>
      </main>
    </div>
  );
}
