"use client";

import Link from "next/link";

const LoginHelpLinks = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-center space-x-4 text-sm">
        <Link
          href="/find-account?tab=member"
          className="text-gray-600 hover:text-blue-600"
        >
          회원번호 찾기
        </Link>
        <span className="text-gray-300">|</span>
        <Link
          href="/find-account?tab=password"
          className="text-gray-600 hover:text-blue-600"
        >
          비밀번호 찾기
        </Link>
        <span className="text-gray-300">|</span>
        <Link href="/signup" className="text-gray-600 hover:text-blue-600">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginHelpLinks;
