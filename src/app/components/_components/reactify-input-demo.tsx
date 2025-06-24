'use client';
import { ReactifyInput } from '@/components/reactify/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function ReactifyInputDemo() {

  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Standard Input</h3>
          <Label htmlFor="demo-name" className="mb-1 block">Name</Label>
          <ReactifyInput type="text" id="demo-name" placeholder="Enter your name" />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Input with Placeholder</h3>
          <Label htmlFor="demo-email-placeholder" className="mb-1 block">Email</Label>
          <ReactifyInput type="email" id="demo-email-placeholder" placeholder="your.email@example.com" />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Input with Error State</h3>
          <Label htmlFor="demo-error" className="mb-1 block">Password</Label>
          <ReactifyInput type="password" id="demo-error" placeholder="Enter password" error />
          <p className="text-sm text-destructive mt-1">Password is too short.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Disabled Input</h3>
          <Label htmlFor="demo-disabled" className="mb-1 block">Subscription ID</Label>
          <ReactifyInput type="text" id="demo-disabled" defaultValue="SUB-12345XYZ" disabled />
        </div>
      </CardContent>
    </Card>
  );
}
