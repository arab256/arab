import React from 'react'
import { Header } from './_components/header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const App = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 space-y-10">
            <Header />

            <div className="flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-green-600 text-center">National Amateur Radio Drill 2024</p>
            </div>

            <Button variant="outline" asChild className="flex mx-auto max-w-fit py-6 px-10">
                <Link href="https://safetywingsbd.com/arab" target="_blank">Register Now</Link>
            </Button>
            <Button variant="default" asChild className="flex mx-auto max-w-fit py-6 px-10">
                <Link href="/donation">Donate Now</Link>
            </Button>

            <div className='flex flex-col items-center gap-y-4'>
                <h1 className='text-xl underline tracking-widest'>About Our Programme</h1>
                <p>আসুন, জাতীয় এ্যামেচার রেডিও ড্রিলে অংশ নিয়ে আমরা সবাই দুর্যোগের সময় বিকল্প যোগাযোগ ব্যবস্থায় দক্ষ হয়ে উঠি! আমাদের চারপাশে যারা এ্যামেচার রেডিও অপারেটর বা এ নিয়ে আগ্রহী, তাদেরও এই পোস্টটি শেয়ার করে উৎসাহিত করুন। একসাথে আমরা দুর্যোগ প্রস্তুতিতে এক ধাপ এগিয়ে চলি!</p>

                <p className='text-muted-foreground italic'>National Amateur Radio Drill-2024</p>

                <div>
                    <ol className='space-y-2'>
                        <li>অনুষ্ঠানের তারিখ : ১৪/১১/২০২৪ ইং।</li>
                        <li>অনুষ্ঠানের সময় : সকাল ০৭:৪৫ থেকে বিকাল ০৫:০০ টা।</li>
                        <li>অনুষ্ঠানের স্থান : ৩০০ ফিট, পূর্বাচল, ঢাকা।</li>
                        <li>রেজিস্ট্রেশন ফি: সর্বনিম্ন ৫০০/-। যেহেতু এই আয়োজনটি স্বেচ্ছাসেবা মূলক আয়োজন সেহেতু আপনি ইচ্ছা করলে আপনার রেজিস্ট্রেশন ফি এর সাথে ডোনেশন যুক্ত করে দিতে পারেন। আপনার যে কোন অনুদান আমরা সাদরে গ্রহণ করবো।</li>
                        <li>রেজিস্ট্রেশন করার পদ্ধতি: প্রথমে ফরমটি সম্পূর্ণ পড়ে নিন, ফি পরিশোধ করে ট্রানজেকন নাম্বারটি সংগ্রহ করে নির্দিষ্ট স্থানে লিখে ফরম পূরণ করুন।</li>
                        <li>সকাল ৭:১৫ এবং ৭:৩০ মিনিটে কুড়িল বিশ্বরোড (ঢাকা) থেকে আয়োজন স্থল পর্যন্ত ফ্রি বাস সার্ভিস থাকবে। আয়োজন শেষে আয়োজন স্থল থেকে কুড়িল বিশ্বরোড (ঢাকা) -এ পূনরায় ফ্রি বাস সার্ভিস থাকবে।</li>
                        <li>রেজিস্ট্রেশন এ অন্তর্ভুক্ত থাকবে: সকালের নাস্তা, ১টি পোলো শার্ট, দুপুরের খাবার, বিকালের চা বিস্কুট, ৫০০ মি:লি ৩ টি পানির বোতল, অংশগ্রহণের সার্টিফিকেট এবং উপহার সামগ্রী (যদি থাকে)।</li>
                        <li>আয়োজন স্থল ধূমপান মুক্ত।</li>
                        <li>জুতা/কেডস্ পড়ে আয়োজনে অংশগ্রহণ করা বাধ্যতামূলক।</li>
                        <li>অসুস্থ ব্যাক্তি অংশগ্রহণ করতে পারবেন না।</li>
                        <li>প্রকৃতির ক্ষতি সাধন করা নিষিদ্ধ এবং দন্ডনিয় অপরাধ। ক্ষতিকর কোনো কিছু আয়োজনে নিয়ে অংশগ্রহণ নিষিদ্ধ।</li>
                        <li>শতভাগ শৃঙ্খলা মেনে আয়োজনে অংশগ্রহণ করা বাধ্যতামূলক।</li>
                        <li>কোন কারনে উক্ত আয়োজন বাতিল হলে রেজিস্ট্রেশন ফি ফেরতযোগ্য।</li>
                        <li>কোন রাজনৈতিক, ধর্মীয়, বিদ্বেষ মূলক কোন বিষয় নিয়ে আলোচনা আয়োজনে নিষিদ্ধ।</li>
                        <li>চারটি টিম এ সকল অংশগ্রহণকারী কে বিন্যস্ত করা হবে, টিম লিডার এর সিদ্ধান্ত টিমের চুড়ান্ত সিদ্ধান্ত বলে গন্য হবে।</li>
                        <li>রেজিস্ট্রেশন এর শেষ তারিখ: ০৬/১১/২০২৪ ইং তারিখ রাত ১১:৫৯ মিনিট।</li>
                        <li>আয়োজনের সকল ছবি/ভিডিও সামাজিক যোগাযোগের মাধ্যম এবং গনমাধ্যমে প্রকাশিত হবে।</li>
                    </ol>

                    <p className='text-muted-foreground italic mt-6'>আসুন আমরা আমাদের দেশটাকে গড়ে তুলি।
                    ধন্যবাদ।</p>
                    <p className='text-muted-foreground italic'>ধন্যবাদ</p>
                    <p className='text-muted-foreground italic'>ক্যাপ্টেন (NARD-24)</p>
                </div>

                <div className='relative aspect-video w-full h-full'>
                    <Image src="/banner.jpg" alt="ARAB" fill className='object-contain rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default App
