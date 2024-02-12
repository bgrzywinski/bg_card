import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <div className='rounded-[50%] p-4 bg-white border-[10px] border-gray flex justify-center items-center'><Image src='/bg_profile.jpg' alt='bg'
                                                                                        width={150} height={150}
                                                                                        className='rounded-[50%]'/>
                </div>
                <h1 className='text-center p-6 text-2xl font-bold mt-6'>Bartosz Grzywiński</h1>
                <p className='text-center font-bold'>JavaScript Developer</p>
            </div>
            <div className="flex gap-6 mt-14">
                <Link
                    href="https://github.com/bgrzywinski"
                    passHref
                    target="_blank"
                >
                    <Image
                        src="/github_icon.svg"
                        alt="gh"
                        width={30}
                        height={30}
                        className='hover:scale-125'
                    />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/bartosz-grzywi%C5%84ski-6b445b142/"
                    passHref
                    target="_blank"
                >
                    <Image
                        src="/linked_in.svg"
                        alt="li"
                        width={30}
                        height={30}
                        className='hover:scale-125'
                    />
                </Link>
                <Link
                    href="https://panstwobarmanstwo.pl"
                    passHref
                    target="_blank"
                >
                    <Image
                        src="/pb_logo.png"
                        alt="pb"
                        width={30}
                        height={30}
                        className='hover:scale-125'
                    />
                </Link>
            </div>
            <div className='pt-12 xl:gap-16 gap-8 mx-6 flex-wrap flex justify-center items-center'>
                <Image
                    src="/js.svg"
                    alt="js"
                    width={30}
                    height={30}
                />
                <Image
                    src="/react.png"
                    alt="pb"
                    width={30}
                    height={30}
                />
                <Image
                    src="/ts.svg"
                    alt="pb"
                    width={30}
                    height={30}
                />
                <Image
                    src="/next.svg"
                    alt="pb"
                    width={60}
                    height={60}
                />
                <Image
                    src="/tailwind.png"
                    alt="pb"
                    width={30}
                    height={30}
                />
                <Image
                    src="/figma.svg"
                    alt="pb"
                    width={30}
                    height={30}
                />
                <Image
                    src="/jira.svg"
                    alt="pb"
                    width={30}
                    height={30}
                />

            </div>
        </main>
    );
}
