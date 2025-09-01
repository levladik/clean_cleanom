# System Patterns

## System Architecture
The website will be built on the WordPress Content Management System (CMS). The architecture will leverage WordPress's core functionalities, custom post types, and potentially custom plugins or theme development to implement the specific features required. A responsive design will ensure compatibility across various devices.

## Key Technical Decisions
*   **CMS:** WordPress will be the foundational platform.
*   **Multi-language Support:** Implementation of a robust multi-language solution to cater to Russian, English, and Serbian speaking users.
*   **Online Payment Integration:** Secure integration with a chosen payment gateway to facilitate transactions.
*   **Custom Feature Development:** Development of bespoke functionalities for the online application, cost calculator, and booking system, likely through custom plugins or theme features.

## Design Patterns
*   **MVC (Model-View-Controller) / WordPress Structure:** While WordPress has its own templating and data handling structure, custom feature development may adopt MVC principles for modularity and maintainability.
*   **Facade Pattern:** To simplify the interface for complex subsystems like the booking management or payment processing.
*   **Strategy Pattern:** Potentially used for flexible pricing calculations or different service offerings.
*   **Observer Pattern:** For handling user actions and updating relevant parts of the application (e.g., updating order history after a booking).

## Component Relationships
*   **Landing Page:** Acts as the central hub, directing users to various features.
*   **Application Form:** Collects user data and service requirements, feeding into the booking system and potentially the personal account.
*   **Cost Calculator:** Interacts with service data to provide estimated pricing.
*   **Booking System:** Manages service slots, user bookings, and cancellations, interacting with the personal account and potentially payment gateway.
*   **Personal Account:** Displays user-specific data such as order history and reviews, linked to bookings and service interactions.
*   **Payment Gateway:** Integrates with the booking or application process to handle transactions.
*   **Multi-language Plugin:** Manages content translation across all website sections.

## Critical Implementation Paths
1.  **Service Booking Flow:** User lands on page -> explores services -> uses cost calculator -> completes application form -> selects booking slot -> confirms details -> makes payment -> receives confirmation.
2.  **User Account Management:** User logs in -> views past orders -> manages profile information -> potentially leaves reviews.
