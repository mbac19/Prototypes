//
//  DesignSpecs.swift
//  002-fin
//
//  Created by Brendan McNamara on 8/28/22.
//

import Foundation
import SwiftUI

enum DesignSpecs {
    static let titleFont = Font.system(size: 18, weight: .heavy)

    static let subtitleFont = Font.system(size: 14, weight: .thin)
    
    static let asideFont = Font.system(size: 12, weight: .thin)

    static let buttonFont = Font.system(size: 12, weight: .regular)

    static let primaryFont = Font.system(size: 14, weight: .regular)

    static let primaryBoldFont = Font.system(size: 14, weight: .bold)

    static let sectionHeaderFont = Font.system(size: 16, weight: .semibold)

    static let transactionIconColors = [
        Color(.displayP3, red: 238 / 255.0, green: 253 / 255.0, blue: 254 / 255.0, opacity: 1.0),
        Color(.displayP3, red: 246 / 255.0, green: 227 / 255.0, blue: 206 / 255.0, opacity: 1.0),
        Color(.displayP3, red: 241 / 255.0, green: 226 / 255.0, blue: 241 / 255.0, opacity: 1.0),
    ]
}
