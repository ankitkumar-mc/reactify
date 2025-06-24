'use client';
import { 
  ReactifyCard,
  ReactifyCardHeader,
  ReactifyCardTitle,
  ReactifyCardDescription,
  ReactifyCardContent,
  ReactifyCardFooter
} from '@/components/reactify/card';
import { ReactifyButton } from '@/components/reactify/button';
import Image from 'next/image';

export default function ReactifyCardDemo() {

  return (
    <div className="w-full space-y-8">
      <ReactifyCard className="max-w-md">
        <ReactifyCardHeader>
          <ReactifyCardTitle>Product Update</ReactifyCardTitle>
          <ReactifyCardDescription>Version 2.0 is now live!</ReactifyCardDescription>
        </ReactifyCardHeader>
        <ReactifyCardContent>
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="Product abstract image" 
            width={600} 
            height={400} 
            className="rounded-md mb-4"
            data-ai-hint="product update" 
          />
          <p className="text-sm">
            We're excited to announce the release of Reactify v2.0, packed with new features, performance improvements, and enhanced accessibility.
          </p>
        </ReactifyCardContent>
        <ReactifyCardFooter>
          <ReactifyButton variant="primary" size="sm" className="mr-2">Read More</ReactifyButton>
          <ReactifyButton variant="outline" size="sm">Dismiss</ReactifyButton>
        </ReactifyCardFooter>
      </ReactifyCard>

      <ReactifyCard className="max-w-md bg-accent text-accent-foreground">
        <ReactifyCardHeader>
          <ReactifyCardTitle>Special Announcement</ReactifyCardTitle>
        </ReactifyCardHeader>
        <ReactifyCardContent>
          <p>
            Join our webinar next week to learn about the future of universal component libraries. Limited spots available!
          </p>
        </ReactifyCardContent>
        <ReactifyCardFooter>
          <ReactifyButton variant="secondary" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">Register Now</ReactifyButton>
        </ReactifyCardFooter>
      </ReactifyCard>
    </div>
  );
}
