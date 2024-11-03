import { DonationForm } from "../_components/donation-form"

const App = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto py-4 space-y-4 px-4">
            <div>
                <h1 className="text-2xl font-bold text-center text-green-600">National Amateur Radio Drill 2024</h1>
                <p className="text-center text-muted-foreground">Amateur Radio Association of Bangladesh</p>
            </div>
            <DonationForm />
        </div>
    )
}

export default App