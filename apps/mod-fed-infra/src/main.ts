import { loadRemoteModule } from '@angular-architects/module-federation';

/* import('./bootstrap')
	.catch(err => console.error(err)); */

(window as any)['@my-company-namespace/mod-fed-infra'] = { loadRemoteModule };
