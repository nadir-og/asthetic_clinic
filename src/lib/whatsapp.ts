import { clinic } from '@/data/clinicData';

/**
 * Builds a WhatsApp deep link with a pre-filled, URL-encoded message.
 * Usage: waLink('I want to claim the Anniversary Special Deal')
 */
export function waLink(message: string): string {
  const encoded = encodeURIComponent(
    `Hi ${clinic.name}, ${message}`
  );
  return `https://wa.me/${clinic.whatsappNumber}?text=${encoded}`;
}

/** Convenience link for the generic anniversary deal CTA. */
export function waAnniversaryLink(): string {
  return waLink('I want to claim the Anniversary Special Deal!');
}

/** Convenience link for a specific service. */
export function waServiceLink(serviceTitle: string, salePrice: number): string {
  return waLink(
    `I'm interested in the "${serviceTitle}" treatment (Anniversary price: Rs. ${salePrice.toLocaleString()}). Please share available slots.`
  );
}

/** Convenience link for a specific bundle. */
export function waBundleLink(bundleName: string, price: number): string {
  return waLink(
    `I want to book the "${bundleName}" bundle (Price: Rs. ${price.toLocaleString()}). Please share available slots.`
  );
}

/** Convenience link for the FAQ / general questions CTA. */
export function waQuestionLink(): string {
  return waLink('I have a few questions about your treatments. Can you help?');
}

/** Standard tel: link */
export function telLink(): string {
  return `tel:${clinic.phone.replace(/\s/g, '')}`;
}

/** Google Maps directions link */
export function mapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    clinic.mapsQuery
  )}`;
}

/** Google Maps embed URL for iframe */
export function mapsEmbedUrl(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    clinic.mapsQuery
  )}&output=embed`;
}
