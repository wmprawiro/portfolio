"use client";

import Link from "next/link";
import { Download, Mail } from "lucide-react";

export function SiteNavbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-800"
      aria-label="メインナビゲーション"
    >
      <div className="flex items-center justify-between py-2 px-6 xl:mx-auto xl:max-w-[1152px] xl:px-14 2xl:mx-96 2xl:px-14">
        {/* Logo */}
        <Link
          href="/#"
          className="font-noto-sans-mono font-normal text-white hover:opacity-80 transition-opacity"
          title="ホーム - wmprawiroポートフォリオ"
          style={{ fontSize: "20px" }}
        >
          wmprawiro
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            download
            title="履歴書をダウンロード"
            className="flex items-center gap-2 font-noto-sans-mono text-xs text-neutral-500 hover:text-white transition-colors"
          >
            履歴書ダウンロード
            <Download className="w-3 h-3" />
          </Link>

          <a
            href="mailto:hello@wmprawiro.dev"
            title="メールを送信"
            className="flex items-center gap-2 font-noto-sans-mono text-xs text-neutral-500 hover:text-white transition-colors"
          >
            メール
            <Mail className="w-3 h-3" />
          </a>
        </div>
      </div>
    </nav>
  );
}
