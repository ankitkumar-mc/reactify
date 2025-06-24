'use client';
import { ReactifyDropdown, ReactifyDropdownItem } from '@/components/reactify/dropdown';
import { ReactifyButton } from '@/components/reactify/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Edit, Copy, Archive, MoreHorizontal, User, Settings, LogOut } from 'lucide-react';

export default function ReactifyDropdownDemo() {

  return (
    <Card className="w-full">
      <CardContent className="p-6 flex flex-wrap gap-8 items-start">
        <div>
          <h3 className="font-semibold text-lg mb-2">Standard Dropdown</h3>
          <ReactifyDropdown
            trigger={
              <ReactifyButton variant="outline" rightIcon={<ChevronDown size={16} />}>
                Actions
              </ReactifyButton>
            }
          >
            <ReactifyDropdownItem onSelect={() => alert('Edit action')} className="flex items-center gap-2">
              <Edit size={14} /> Edit
            </ReactifyDropdownItem>
            <ReactifyDropdownItem onSelect={() => alert('Copy action')} className="flex items-center gap-2">
              <Copy size={14} /> Copy
            </ReactifyDropdownItem>
            <ReactifyDropdownItem onSelect={() => alert('Archive action')} className="flex items-center gap-2">
              <Archive size={14} /> Archive
            </ReactifyDropdownItem>
            <hr className="my-1 border-border" />
            <ReactifyDropdownItem onSelect={() => alert('Delete action')} className="text-destructive hover:bg-destructive/10 flex items-center gap-2">
              Delete
            </ReactifyDropdownItem>
          </ReactifyDropdown>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Right Aligned Dropdown</h3>
          <ReactifyDropdown
            align="right"
            trigger={
              <ReactifyButton variant="ghost" size="sm" className="p-2">
                <MoreHorizontal size={20} />
                 <span className="sr-only">More options</span>
              </ReactifyButton>
            }
          >
            <ReactifyDropdownItem onSelect={() => alert('Profile selected')} className="flex items-center gap-2">
              <User size={14} /> View Profile
            </ReactifyDropdownItem>
            <ReactifyDropdownItem onSelect={() => alert('Settings selected')} className="flex items-center gap-2">
              <Settings size={14} /> Account Settings
            </ReactifyDropdownItem>
            <hr className="my-1 border-border" />
            <ReactifyDropdownItem onSelect={() => alert('Logout selected')} disabled className="flex items-center gap-2">
              <LogOut size={14} /> Logout (Disabled)
            </ReactifyDropdownItem>
          </ReactifyDropdown>
        </div>
      </CardContent>
    </Card>
  );
}
