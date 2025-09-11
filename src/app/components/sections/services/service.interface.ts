export interface Feature {
  text: string
  excluded?: boolean
}

export interface ServiceCardProps {
  title: string
  cleaners: string
  duration: string
  price: string
  features: Feature[]
  popular: boolean
}

export interface AdditionalService {
  title: string
  price: string
}

export interface ServicesProps {
  servicesData?: ServiceCardProps[]
  additionalServicesData?: AdditionalService[]
}
