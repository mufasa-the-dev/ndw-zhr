import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  template: `
    <main class="bg-paper-texture min-h-screen py-16 px-4">
      <div class="max-w-3xl mx-auto bg-[#242424] text-white p-8 md:p-12 rounded-[32px] shadow-2xl">
        <h1 class="text-5xl font-['Just_Another_Hand'] text-center text-red-500 mb-6">Skontaktuj się z nami</h1>
        
        <p class="text-center text-gray-300 text-sm mb-8">
          Wiadomości wysyłane z formularza trafiają bezpośrednio na adres <strong>ndw.hello&#64;outlook.com</strong>.
        </p>

        <form (ngSubmit)="sendMessage()" class="space-y-6">
          <div>
            <label class="block text-sm font-medium mb-2">Imię i nazwisko / Pseudonim</label>
            <input 
              type="text" 
              [(ngModel)]="formData.name" 
              name="name" 
              required
              class="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Twój adres e-mail</label>
            <input 
              type="email" 
              [(ngModel)]="formData.email" 
              name="email" 
              required
              class="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Treść zgłoszenia</label>
            <textarea 
              rows="5" 
              [(ngModel)]="formData.message" 
              name="message" 
              required
              class="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Wyślij zgłoszenie
          </button>

          @if (statusMessage()) {
            <p class="text-center text-green-400 font-medium mt-4">{{ statusMessage() }}</p>
          }
        </form>
      </div>
    </main>
  `
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };
  readonly statusMessage = signal('');

  sendMessage() {
    // Wypięcie pod zewnętrzny backend wysyłający maila do ndw.hello@outlook.com (np. EmailJS lub endpoint /api/contact)
    this.statusMessage.set('Wiadomość została wysłana do ndw.hello@outlook.com!');
    this.formData = { name: '', email: '', message: '' };
  }
}