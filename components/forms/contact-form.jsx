'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckIcon } from '@radix-ui/react-icons';

export default function ContactForm() {
    const [isSuccess, SetSuccess] = useState(false);

    const [data, setData] = useState({
        title: '',
        email: '',
        content: '',
    });

    const onSubmit = (event) => {
        event.preventDefault();
        
        // Mailto link oluştur
        const mailtoLink = `mailto:alperenkarslix@gmail.com?subject=${encodeURIComponent(data.title)}&body=${encodeURIComponent(`From: ${data.email}\n\nMessage:\n${data.content}`)}`;
        
        // Email client'ını aç
        window.location.href = mailtoLink;
        
        // Success mesajı göster
        SetSuccess(true);
        
        // Formu temizle
        setData({
            title: '',
            email: '',
            content: '',
        });
        
        // Success mesajını 3 saniye sonra gizle
        setTimeout(() => {
            SetSuccess(false);
        }, 3000);
    };

    return (
        <>
            <form onSubmit={onSubmit} className="p-2 sm:p-8 md:p-12">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={data.title}
                        onChange={(e) => {
                            setData(prev => ({
                                ...prev,
                                title: e.target.value
                            }));
                        }}
                        required
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={data.email}
                        onChange={(e) => {
                            setData(prev => ({
                                ...prev,
                                email: e.target.value
                            }));
                        }}
                        required
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        rows="6"
                        placeholder="Your Message"
                        value={data.content}
                        onChange={(e) => {
                            setData(prev => ({
                                ...prev,
                                content: e.target.value
                            }));
                        }}
                        required
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                    ></textarea>
                </div>
                <div>
                    <Button
                        type="submit"
                        className="bg-primary border-primary w-full rounded border p-3 py-6 text-white transition hover:bg-opacity-90"
                    >
                        Send Message
                    </Button>
                </div>
                {isSuccess && (
                    <Alert className="mt-2 rounded p-2 flex items-center border-green-600 text-green-600">
                        <div>
                            <CheckIcon className="h-5 w-5" />
                        </div>
                        <AlertDescription>
                            Email client opened! Your message is ready to send.
                        </AlertDescription>
                    </Alert>
                )}
            </form>
        </>
    );
}
