# Configuración del creador de webs de Transport AI

## Variables de entorno en Vercel
Añade estas variables en el proyecto `transport-ai-web` (Production, Preview y Development cuando proceda):

- `SUPABASE_URL`: URL del proyecto Supabase.
- `SUPABASE_SERVICE_ROLE_KEY`: clave service role (solo servidor; nunca NEXT_PUBLIC).
- `STRIPE_SECRET_KEY`: clave secreta de Stripe.
- `STRIPE_WEBHOOK_SECRET`: secreto de firma del webhook Stripe.
- `OPENAI_API_KEY`: clave API para generar el contenido.
- `OPENAI_WEB_MODEL`: opcional; por defecto `gpt-4o-mini`.

## Supabase
Ejecuta el archivo `supabase-web-orders.sql` en SQL Editor. Crea la tabla `web_orders` y el bucket público `web-order-photos`. El acceso de escritura a Storage y a la tabla se realiza desde el servidor con la clave service role.

## Stripe
1. Configura la cuenta de Stripe y los datos bancarios de liquidación.
2. Activa Stripe Tax y configura los datos fiscales/registro aplicables en España. El checkout usa Automatic Tax y solicita dirección de facturación.
3. Crea un endpoint webhook con URL `https://transportai.es/api/stripe/webhook`.
4. Suscribe el evento `checkout.session.completed` y guarda su signing secret como `STRIPE_WEBHOOK_SECRET`.
5. Configura la clave secreta como `STRIPE_SECRET_KEY`.

El checkout cobra el precio base de 300 €; Stripe Tax calcula el IVA aplicable. La oferta muestra 450 € como precio anterior y 300 € como precio promocional. Verifica que el tratamiento fiscal y el precio de referencia sean correctos antes de publicar la oferta.

## Flujo
El cliente completa el asistente y sube imágenes; el servidor guarda el pedido pendiente, crea una sesión Stripe y redirige al checkout. Solo el webhook firmado de Stripe, al recibir `checkout.session.completed` con `payment_status=paid`, activa la generación de contenido con IA. La demo queda disponible en `/web-demo/[slug]` y el equipo debe revisarla antes de su publicación final.

## Límites actuales
- La IA genera el contenido y una web de presentación usando una plantilla profesional común; no crea todavía un repositorio independiente ni publica automáticamente un dominio personalizado.
- Dominio, hosting, correo y funciones especiales quedan fuera del precio promocional.
- Si la generación falla después del pago, el pedido queda registrado para reintento/atención manual; no se pierde la confirmación de pago.

## Subdominios temporales en Vercel
El proyecto ya tiene asociado y verificado el dominio comodín `*.transportai.es`. Para que cada web generada tenga una dirección como `negocio-abc123.transportai.es`, añade en el DNS de STRATO un registro:

- Tipo: CNAME
- Host / nombre: `*`
- Destino: `2a1240cc7ad77525.vercel-dns-017.com`

El `proxy.ts` consulta el pedido pagado en Supabase y reescribe ese subdominio a la web generada. No hace falta comprar un dominio para la primera demo. Cuando el cliente compre su propio dominio, se conectará después como parte de la entrega.

## Cobros
El pago se procesa en Stripe Checkout. El dinero se liquida en la cuenta bancaria que el titular haya añadido y verificado en su propia cuenta Stripe; Transport AI no puede elegir ni cambiar esa cuenta desde el código. Completa la verificación de identidad y los datos bancarios en Stripe antes de aceptar pagos reales.
