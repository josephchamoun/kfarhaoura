import { useState } from "react";
import { Eye, EyeOff, UserPlus, LogIn, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function RegistrationSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"register" | "login">("register");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "register" && formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: activeTab === "register" ? "Registration Successful!" : "Login Successful!",
      description: "This is a frontend demo. Backend integration coming soon.",
    });
  };

  return (
    <section id="register" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-amiri text-4xl md:text-5xl text-foreground mb-4 arabic-heading">
            انضم إلى مجتمعنا
          </h2>
          <p className="text-muted-foreground text-lg">Join Our Community</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Form Card */}
        <div className="max-w-md mx-auto bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-4 px-6 font-medium transition-colors ${
                activeTab === "register"
                  ? "bg-primary/10 text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <UserPlus size={18} />
                Register
              </span>
            </button>
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-4 px-6 font-medium transition-colors ${
                activeTab === "login"
                  ? "bg-primary/10 text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <LogIn size={18} />
                Login
              </span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {activeTab === "register" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+961 XX XXX XXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Age
                  </label>
                  <Input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                    min="1"
                    max="120"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {activeTab === "register" && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            )}

            <Button type="submit" variant="cedar" size="lg" className="w-full">
              {activeTab === "register" ? "Register" : "Login"}
            </Button>

            {activeTab === "login" && (
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                onClick={() =>
                  toast({
                    title: "Forgot Password",
                    description: "Password reset functionality coming soon.",
                  })
                }
              >
                <HelpCircle size={16} />
                Forgot Password?
              </button>
            )}
          </form>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          This is a frontend demo. Connect to Lovable Cloud for full authentication.
        </p>
      </div>
    </section>
  );
}
