# -*- coding: utf-8 -*-
"""
Main Generator: Builds study_data.js from generator_modules
"""
import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

# Add parent directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'generator_modules'))

from materials_data import get_materials_catalog
from theory_data import get_theory_bank
from exercise_data import get_exercise_bank

print("Importing modules...")
materials = get_materials_catalog()
theory = get_theory_bank()
exercises = get_exercise_bank()

output_path = os.path.join(os.path.dirname(__file__), 'study_data.js')

print(f"Generating {output_path}...")

with open(output_path, 'w', encoding='utf-8') as f:
    f.write("/**\n")
    f.write(" * VACPA Planner 2026 - Study & Exercise Database\n")
    f.write(" * Tích hợp trọn bộ 7 Chuyên đề Bộ Tài chính 2026, Ngân hàng Lý thuyết A/B/C/D & Ngân hàng Bài tập Luyện đề\n")
    f.write(" */\n\n")
    
    f.write("const MATERIALS_CATALOG = ")
    json.dump(materials, f, ensure_ascii=False, indent=2)
    f.write(";\n\n")
    
    f.write("const THEORY_BANK = ")
    json.dump(theory, f, ensure_ascii=False, indent=2)
    f.write(";\n\n")
    
    f.write("const EXERCISE_BANK = ")
    json.dump(exercises, f, ensure_ascii=False, indent=2)
    f.write(";\n\n")
    
    f.write("// Expose globally\n")
    f.write("if (typeof window !== 'undefined') {\n")
    f.write("  window.MATERIALS_CATALOG = MATERIALS_CATALOG;\n")
    f.write("  window.THEORY_BANK = THEORY_BANK;\n")
    f.write("  window.EXERCISE_BANK = EXERCISE_BANK;\n")
    f.write("}\n")

print(f"Successfully generated study_data.js ({os.path.getsize(output_path)} bytes)!")
