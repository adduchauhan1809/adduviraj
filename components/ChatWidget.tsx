'use client'

import Script from 'next/script'

export default function ChatWidget() {
  return (
    <>
      {/* First script: Initialize the function */}
      <Script
        id="embedded-messaging-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function initEmbeddedMessaging() {
              try {
                embeddedservice_bootstrap.settings.language = 'en_US';
                embeddedservice_bootstrap.init(
                  '00Dg5000002kBx3',
                  'SFtroop',
                  'https://orgfarm-d4d03d3f06-dev-ed.develop.my.site.com/ESWSFtroop1767146249892',
                  {
                    scrt2URL: 'https://orgfarm-d4d03d3f06-dev-ed.develop.my.salesforce-scrt.com'
                  }
                );
              } catch (err) {
                console.error('Error loading Embedded Messaging: ', err);
              }
            }
          `,
        }}
      />
      
      {/* Second script: Load bootstrap and call initEmbeddedMessaging on load */}
      <Script
        src="https://orgfarm-d4d03d3f06-dev-ed.develop.my.site.com/ESWSFtroop1767146249892/assets/js/bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && typeof (window as any).initEmbeddedMessaging === 'function') {
            (window as any).initEmbeddedMessaging();
          }
        }}
      />
    </>
  )
}

