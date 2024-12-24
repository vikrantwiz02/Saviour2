import { Button } from '@/components/ui/button'

export default function DonationSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Support Our Cause</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-center">Your donation helps us provide critical resources and support to communities affected by disasters. Every contribution makes a difference.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary">Donate $10</Button>
          <Button size="lg" variant="secondary">Donate $25</Button>
          <Button size="lg" variant="secondary">Donate $50</Button>
          <Button size="lg" variant="secondary">Donate $100</Button>
          <Button size="lg" variant="outline">Custom Amount</Button>
        </div>
      </div>
    </section>
  )
}

