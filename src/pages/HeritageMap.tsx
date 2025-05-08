
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Building } from "lucide-react";

// Map placeholder images (these would be replaced with actual maps)
import historicEnglandMapImage from '../assets/historic-england-map.png';

const HeritageMap = () => {
  return (
    <Layout>
      <Hero 
        title="Heritage Map"
        subtitle="Explore Louth's architectural heritage through our interactive map"
      />
      
      <Section title="LOUTH INTERACTIVE HERITAGE MAP" className="bg-white">
        <div className="space-y-6">
          <p>
            Welcome to the Louth Civic Trust interactive heritage map. The map has been developed 
            to create an extensive archive of Louth architectural heritage. Please follow the link 
            below the map to submit details of buildings, architectural features or historical 
            information along with images. These will be added to the map once approved, this may 
            take a few days.
          </p>
          
          {/* Interactive Map Placeholder - would be replaced with actual map implementation */}
          <div className="w-full aspect-video bg-slate-200 rounded-lg border overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1XGhKNDjvQenZuIh-Q_5ekJ77H-8&ehbc=2E312F" 
              width="100%" 
              height="100%" 
              title="Louth Interactive Heritage Map"
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button className="flex items-center gap-2">
              <MapPin size={18} />
              Add to the map
            </Button>
          </div>
        </div>
      </Section>
      
      <Section title="LOUTH CONSERVATION AREA" className="bg-lct-gray">
        <div className="space-y-6">
          <p>
            The Louth Conservation Area was designated in October 1968 and was amongst the earliest 
            in the country after Stamford which was the first. In September 1993 a review of the 
            conservation area boundary resulted in some minor boundary modifications. The current 
            conservation area covers the majority of the historic town, stretching from the foot 
            of Hubbard's Hills to the Riverhead. More information can be found here: 
          </p>
          
          <div className="flex items-center">
            <a 
              href="https://www.e-lindsey.gov.uk/article/6142/Conservation-Areas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              https://www.e-lindsey.gov.uk/article/6142/Conservation-Areas
              <ExternalLink size={16} />
            </a>
          </div>
          
          <p className="text-sm italic mt-4">
            The accuracy of the Conservation Area boundary can not be guaranteed and some inaccuracies may occur.
          </p>
        </div>
      </Section>
      
      <Section title="LOUTH LISTED BUILDINGS" className="bg-white">
        <div className="space-y-6">
          <p>
            A <a href="https://historicengland.org.uk/listing/the-list/results/?searchType=NHLE+Simple&search=louth" target="_blank" rel="noopener noreferrer" className="font-medium">map of listed buildings in Louth</a> can be found on an 
            interactive map hosted by Historic England. Click on the map below to be taken to 
            Historic England's map where you search for Louth.
          </p>
          
          <a 
            href="https://historicengland.org.uk/listing/the-list/results/?searchType=NHLE+Simple&search=louth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full rounded-lg overflow-hidden border shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-slate-100 p-4 flex items-center gap-2 border-b">
              <Building className="text-lct-blue" />
              <span className="font-medium">Historic England Listed Buildings Map</span>
              <ExternalLink size={16} className="ml-auto" />
            </div>
            
            {/* This would be replaced with the actual Historic England map screenshot */}
            <div className="w-full aspect-video bg-slate-200 flex items-center justify-center">
              <p className="text-slate-500">Interactive map of Louth's listed buildings (click to visit Historic England)</p>
            </div>
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default HeritageMap;
