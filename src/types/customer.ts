export type ConnectionType =
  | "Same Organization"
  | "Business Partner"
  | "Vendor"
  | "Guarantor"
  | "Organization Member"
  | "Colleague"
  | "Former Colleague"
  | "Investor"
  | "Investment"
  | "Supplier"
  | "Client"
  | "Employee"
  | "Former Employee"
  | "Family Member"
  | "Former Family Member"
  | "Other";

export interface Connection {
  type: ConnectionType;
  description?: string;
  customerId: string;
}

export interface Customer {
  id: string;
  customerId?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  organization: string;
  accountNumber: string;
  status: string;
  creditScore?: number;
  tin?: string;
  customerSince?: string;
  notes?: string;
  connections: Connection[];
}
