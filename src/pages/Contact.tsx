
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Mail, Phone, Link as LinkIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <Hero 
        title="Contact & Links"
        subtitle="Get in touch with Louth Civic Trust and explore our partner organizations"
      />
      
      <Section title="CONTACT US" className="bg-white">
        <div className="space-y-6">
          <p>
            You can contact Louth Civic Trust by email or you can call our Chairman James Laverack.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Button variant="default" className="flex items-center gap-2">
              <Mail size={18} />
              <span>Email Us</span>
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Phone size={18} />
              <span>Call: 07958 453 636</span>
            </Button>
          </div>
        </div>
      </Section>
      
      <Section title="COUNCIL MEMBERS" className="bg-lct-gray">
        <div className="overflow-x-auto">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">President (2018 - )</TableCell>
                <TableCell>Dr. Richard Gurnham</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Chairman</TableCell>
                <TableCell>James T Laverack</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Vice-Chairman</TableCell>
                <TableCell>Mary Abbott</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Treasurer & Membership Secretary</TableCell>
                <TableCell>Bridget Clark</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Planning Chair</TableCell>
                <TableCell>Ian Trowsdale</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Minutes Secretary</TableCell>
                <TableCell>Barbara Dales</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Secretary</TableCell>
                <TableCell>Joanne Brogden</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Digital & Website</TableCell>
                <TableCell>Ben Heap</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Members</TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <span>Russell Howard</span>
                    <span>Jean Howard</span>
                    <span>Pat Harrison</span>
                    <span>Cynthia Sellick</span>
                    <span>Paula French</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Section>
      
      <Section title="LINKS" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-lct-blue mb-4">NATIONAL</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.civicvoice.org.uk/" target="_blank" rel="noopener noreferrer">The Civic Voice</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.english-heritage.org.uk/" target="_blank" rel="noopener noreferrer">English Heritage</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://georgiangroup.org.uk/" target="_blank" rel="noopener noreferrer">The Georgian Group</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.periodproperty.co.uk/" target="_blank" rel="noopener noreferrer">Period Property UK</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-lct-blue mb-4">LINCOLNSHIRE</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.slha.org.uk/" target="_blank" rel="noopener noreferrer">Society for Lincolnshire History and Archeology</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.htl.org.uk/" target="_blank" rel="noopener noreferrer">Heritage Trust of Lincolnshire</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="#" target="_blank" rel="noopener noreferrer">Horncastle Civic Society</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="#" target="_blank" rel="noopener noreferrer">Sleaford Civic Trust</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.e-lindsey.gov.uk/article/2066/Listed-Buildings-and-Conservation-Areas" target="_blank" rel="noopener noreferrer">East Lindsey District Council Conservation Dept.</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-lct-blue mb-4">LOUTH</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.louthleader.co.uk/" target="_blank" rel="noopener noreferrer">Louth Eye</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.louthtowncouncil.gov.uk/" target="_blank" rel="noopener noreferrer">Louth Town Council</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.lps1899.co.uk/" target="_blank" rel="noopener noreferrer">Louth Photographic Society</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 p-4 bg-lct-gray rounded-lg text-center">
          <p className="italic">
            We would like to thank Louth Photographic Society for supplying the images for use on this website.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
