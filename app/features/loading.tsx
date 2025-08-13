import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function FeaturesLoading() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 mx-auto mb-4 animate-pulse" />
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-full max-w-3xl mx-auto animate-pulse" />
      </div>

      {/* Stats Banner Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6 text-center">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-2 animate-pulse" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-auto mb-1 animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Categories Skeleton */}
      <div className="space-y-16">
        {[...Array(4)].map((_, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center mb-8">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded mr-3 animate-pulse" />
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, featureIndex) => (
                <Card key={featureIndex}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
