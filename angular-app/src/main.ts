import { bootstrapApplication } from '@angular/platform-browser'
import 'my-font-css'
import { AppComponent } from './app/app.component'
import { appConfig } from './app/app.config'

bootstrapApplication(AppComponent, appConfig).catch(console.error)
