import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-100 to-orange-200 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">Photo Gallery</h1>
          <p className="text-lg text-amber-700">A collection of memorable moments</p>
        </header>

        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-amber-200">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="carousel">Carousel</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="overflow-hidden border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="relative h-80 w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XC7g1tWTqMq5REoopAbd94fnjuCgsn.png"
                      alt="Person with hat and gray shirt"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="relative h-80 w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sRfvky6S8YMUN0BAFyf9vEeXkaLM7l.png"
                      alt="Person with hat and jeans"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="relative h-80 w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2en6lkftYWq12dyguawDp42QhN6x3Z.png"
                      alt="Person with hat outdoors"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="carousel">
            <Card className="border-2 border-amber-300 shadow-xl">
              <CardContent className="p-6">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                      <div className="relative h-[60vh] w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XC7g1tWTqMq5REoopAbd94fnjuCgsn.png"
                          alt="Person with hat and gray shirt"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-amber-600 text-white hover:bg-amber-700">
                          ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle bg-amber-600 text-white hover:bg-amber-700">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                      <div className="relative h-[60vh] w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sRfvky6S8YMUN0BAFyf9vEeXkaLM7l.png"
                          alt="Person with hat and jeans"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-amber-600 text-white hover:bg-amber-700">
                          ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle bg-amber-600 text-white hover:bg-amber-700">
                          ❯
                        </a>
                      </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                      <div className="relative h-[60vh] w-full">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2en6lkftYWq12dyguawDp42QhN6x3Z.png"
                          alt="Person with hat outdoors"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-amber-600 text-white hover:bg-amber-700">
                          ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle bg-amber-600 text-white hover:bg-amber-700">
                          ❯
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 gap-8">
              <Card className="overflow-hidden border-2 border-amber-300 shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative h-[70vh] w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XC7g1tWTqMq5REoopAbd94fnjuCgsn.png"
                      alt="Person with hat and gray shirt"
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-0">
                    <div className="relative h-60 w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sRfvky6S8YMUN0BAFyf9vEeXkaLM7l.png"
                        alt="Person with hat and jeans"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-0">
                    <div className="relative h-60 w-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2en6lkftYWq12dyguawDp42QhN6x3Z.png"
                        alt="Person with hat outdoors"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

