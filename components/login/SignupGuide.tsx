"use client";

import Link from "next/link";

const SignupGuide = () => {
  return (
    <p className="text-sm text-gray-600 text-center mt-10">
      아직 RAIL-O 회원이 아니신가요?{" "}
      <Link
        href="/signup"
        className="text-blue-600 hover:text-blue-700 font-semibold"
      >
        회원가입하기
      </Link>
    </p>
  );
};

export default SignupGuide;
