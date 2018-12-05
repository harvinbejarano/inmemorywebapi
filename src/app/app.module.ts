import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { MockPostService } from './mock-post.service';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(MockPostService),
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
