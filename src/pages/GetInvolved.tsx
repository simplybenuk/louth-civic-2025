
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, HandCoins, Mail, Calendar, FileText } from "lucide-react";
import membershipForm from '../assets/membership-form.pdf';

const GetInvolved = () => {
  return (
    <Layout>
      <Hero 
        title="Get Involved"
        subtitle="Join us in preserving and enhancing the unique character of Louth"
      />
      
      <Section title="THE LOUTH CIVIC TRUST COUNCIL" className="bg-white">
        <div className="space-y-6">
          <p>
            The Louth Civic Trust has a council who meet monthly with sub-committees looking at 
            issues and projects such as Planning Applications, Events and Schools Liaison.
          </p>
          <div className="flex items-center space-x-3 mt-4">
            <Calendar className="text-lct-blue" />
            <p className="font-medium">
              An AGM meeting takes place each April and all members are invited to hear about the 
              on-going campaigns with speakers addressing local or national issues.
            </p>
          </div>
        </div>
      </Section>
      
      <Section title="BECOME A MEMBER" className="bg-lct-gray">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Users className="text-lct-blue mt-1" />
            <div>
              <p className="mb-4">
                The work of the Trust is funded through membership subscription. By becoming a member 
                you can become part of our campaign to maintain the unique historical identity of Louth's 
                living and working environment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Individual Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-lct-blue">£13.00 per year</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Joint Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-lct-blue">£18.00 per year</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Junior Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-lct-blue">£5.00 per year</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p>
              As a member you will also receive regular newsletters by post or by email 
              and invitations to Louth Civic Trust events and automatically gain membership 
              to the national organisation Civic Voice.
            </p>
          </div>
          
          <div className="flex items-center space-x-3 mt-6">
            <FileText className="text-lct-blue" />
            <p>
              Download our membership form below and return it to us to join the Trust.
            </p>
          </div>
          
          <div className="mt-4">
            <Button 
              variant="default"
              className="flex items-center gap-2"
              asChild
            >
              <a href={membershipForm} download="Louth-Civic-Trust-Membership-Form.pdf">
                <FileText size={18} />
                Download Membership Form
              </a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-3 mt-6">
            <HandCoins className="text-lct-blue" />
            <p>
              Donations are always welcome even if you do not want to become a member.
            </p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4">
            <Mail className="text-lct-blue" />
            <p>
              For more information email the Membership Secretary for an application form.
            </p>
          </div>
          
          <div className="mt-6">
            <Button 
              variant="default"
              asChild
            >
              <a href="mailto:louthcivictrust@gmail.com?subject=FAO%20Membership%20Secretary">
                Contact Membership Secretary
              </a>
            </Button>
          </div>
        </div>
      </Section>
      
      <Section title="JOIN THE COMMITTEE" className="bg-white">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Users className="text-lct-blue mt-1" />
            <div>
              <p>
                The Trust is always looking for interested members to help them with the overall 
                management of its campaigning and other activities or if you would like to get 
                involved in a particular project then email our Chairman or call him on 07958 453 636
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <Button 
              variant="default"
              asChild
            >
              <a href="mailto:louthcivictrust@gmail.com?subject=FAO%20Chairman">
                Contact the Chairman
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default GetInvolved;
