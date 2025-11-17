
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
            <Button
              variant="default"
              className="flex items-center gap-2"
              asChild
            >
              <a href="mailto:louthcivictrust@gmail.com">
                <Mail size={18} />
                <span>Email Us</span>
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a href="tel:07958453636">
                <Phone size={18} />
                <span>Call: 07958 453 636</span>
              </a>
            </Button>
          </div>
        </div>
      </Section>
      
      <Section title="TRUSTEES" className="bg-lct-gray">
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
                <TableCell className="font-medium">Treasurer</TableCell>
                <TableCell>Peter Hickman</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Membership Secretary</TableCell>
                <TableCell>Jim Judge</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Planning Chair</TableCell>
                <TableCell>Ian Trowsdale</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Secretary</TableCell>
                <TableCell>Paula French</TableCell>
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
                <a href="http://www.civicvoice.org.uk/" target="_blank" rel="noopener noreferrer">The Civic Voice</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="http://www.english-heritage.org.uk/" target="_blank" rel="noopener noreferrer">English Heritage</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://georgiangroup.org.uk/" target="_blank" rel="noopener noreferrer">The Georgian Group</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="http://www.periodproperty.co.uk/" target="_blank" rel="noopener noreferrer">Period Property UK</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-lct-blue mb-4">LINCOLNSHIRE</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="http://www.slha.org.uk/" target="_blank" rel="noopener noreferrer">Society for Lincolnshire History and Archeology</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.heritagelincolnshire.org/" target="_blank" rel="noopener noreferrer">Heritage Trust of Lincolnshire</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="http://www.horncastlecivic.org.uk/" target="_blank" rel="noopener noreferrer">Horncastle Civic Society</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="http://www.sleafordcivictrust.btck.co.uk/" target="_blank" rel="noopener noreferrer">Sleaford Civic Trust</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.e-lindsey.gov.uk/article/5115/Conservation" target="_blank" rel="noopener noreferrer">East Lindsey District Council Conservation Dept.</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-lct-blue mb-4">LOUTH</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="http://www.loutheye.co.uk/index.php" target="_blank" rel="noopener noreferrer">Louth Eye</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="https://www.louthtowncouncil.gov.uk/" target="_blank" rel="noopener noreferrer">Louth Town Council</a>
              </li>
              <li className="flex items-center gap-2">
                <LinkIcon size={16} className="text-lct-blue" />
                <a href="http://www.louthphotographicsociety.co.uk/" target="_blank" rel="noopener noreferrer">Louth Photographic Society</a>
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
