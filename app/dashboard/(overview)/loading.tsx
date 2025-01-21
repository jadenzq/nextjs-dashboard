/**
 * 
 * 
 * loading.tsx and page.tsx moved to (overview)
 * to avoid <DashboardSkeleton /> being shown in 
 * customers/page.tsx and invoices/page.tsx
 * 
 *  
 */ 

import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading () {
  return <DashboardSkeleton />;
}