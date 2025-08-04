import CourseToc from '@/components/CourseToc'

export default function DomoticaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <CourseToc />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">© 2024 Curso de Domótica en Casa</p>
            <p className="text-sm">Diseñado para estudiantes de escuela técnica electromecánica</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
