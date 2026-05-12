import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../lib/api/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await login({ email, password });
      localStorage.setItem("token", data.access_token);
      navigate("/dashboard");
    } catch {
      setError("incorrect email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-2 border border-[#1a1a1a] rounded-lg overflow-hidden">
        {/* Left side */}
        <div className="bg-[#0d0d0d] border-r border-[#1a1a1a] p-10 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-green-500 text-sm tracking-wider">
              pipeline-watch
            </span>
          </div>

          <div>
            <p className="text-[#f0f0f0] text-2xl font-medium leading-snug mb-3">
              your pipelines,
              <br />
              <span className="text-green-500">always visible.</span>
            </p>
            <p className="text-[#444] text-sm leading-relaxed max-w-[260px]">
              monitor all your github actions workflows across every repo — in
              one clean dashboard.
            </p>
          </div>

          <div className="font-mono text-[11px] text-[#1e1e1e] tracking-wide">
            <span className="text-green-500 opacity-40">$ </span>
            pipeline-watch --status all
          </div>
        </div>

        {/* Right side */}
        <div className="bg-[#0f0f0f] p-10 flex flex-col justify-center">
          <p className="text-[#f0f0f0] text-lg font-medium mb-1">sign in</p>
          <p className="font-mono text-[#3a3a3a] text-xs tracking-wide mb-8">
            // enter your credentials
          </p>

          <label className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-1.5 block">
            email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#161616] border border-[#222] rounded-md px-3 py-2.5 text-sm text-[#e5e5e5] placeholder-[#2a2a2a] outline-none focus:border-green-500 transition-colors mb-4"
          />

          <label className="font-mono text-[10px] text-[#444] uppercase tracking-widest mb-1.5 block">
            password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="w-full bg-[#161616] border border-[#222] rounded-md px-3 py-2.5 text-sm text-[#e5e5e5] placeholder-[#2a2a2a] outline-none focus:border-green-500 transition-colors mb-2"
          />

          {error && (
            <p className="font-mono text-[11px] text-red-500 mb-3 tracking-wide">
              // {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-green-500 text-[#0d0d0d] font-mono text-xs font-medium tracking-wider rounded-md py-2.5 mt-2 hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
          >
            {loading ? "authenticating..." : "execute →"}
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 border-t border-[#1e1e1e]" />
            <span className="font-mono text-[10px] text-[#2a2a2a]">or</span>
            <div className="flex-1 border-t border-[#1e1e1e]" />
          </div>

          <p className="text-[#333] text-xs text-center">
            no account?{" "}
            <Link
              to="/register"
              className="text-green-500 font-mono text-[11px] hover:opacity-80"
            >
              register →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
